// Reading behaviour for the static MPAS site: sidebar groups, citation cards,
// search and the on-this-page highlight. No framework, no network.
(function () {
  'use strict'

  // ---- sidebar groups, remembered per reader -----------------------------
  var KEY = 'mpas-nav-closed'
  var closed = {}
  try { closed = JSON.parse(localStorage.getItem(KEY) || '{}') } catch (e) { closed = {} }
  var save = function () { try { localStorage.setItem(KEY, JSON.stringify(closed)) } catch (e) {} }

  document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    var id = btn.getAttribute('data-target')
    var group = document.getElementById(id)
    if (!group) return
    if (closed[id]) { group.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false') }
    var chev = btn.querySelector('svg')
    var sync = function () {
      var open = !group.classList.contains('hidden')
      btn.setAttribute('aria-expanded', String(open))
      if (chev) chev.classList.toggle('rotate-90', open)
    }
    sync()
    btn.addEventListener('click', function () {
      group.classList.toggle('hidden')
      closed[id] = group.classList.contains('hidden')
      save()
      sync()
    })
  })

  // ---- citation cards -----------------------------------------------------
  var card = document.getElementById('citation-card')
  var cardText = document.getElementById('citation-text')
  var hideTimer = null
  function show(el) {
    if (!card || !cardText) return
    clearTimeout(hideTimer)
    cardText.textContent = el.getAttribute('data-source') || ''
    card.classList.remove('hidden')
    var r = el.getBoundingClientRect()
    var w = card.offsetWidth || 256
    var left = Math.min(Math.max(8, r.left + r.width / 2 - w / 2), window.innerWidth - w - 8)
    var top = r.top - (card.offsetHeight || 60) - 6
    if (top < 8) top = r.bottom + 6
    card.style.left = left + 'px'
    card.style.top = top + 'px'
  }
  function hide() { hideTimer = setTimeout(function () { card && card.classList.add('hidden') }, 120) }
  document.querySelectorAll('a.citation').forEach(function (el) {
    el.addEventListener('mouseenter', function () { show(el) })
    el.addEventListener('mouseleave', hide)
    el.addEventListener('focus', function () { show(el) })
    el.addEventListener('blur', hide)
  })
  if (card) {
    card.addEventListener('mouseenter', function () { clearTimeout(hideTimer) })
    card.addEventListener('mouseleave', hide)
  }

  // ---- on this page -------------------------------------------------------
  var tocLinks = [].slice.call(document.querySelectorAll('[data-toc]'))
  if (tocLinks.length) {
    var targets = tocLinks
      .map(function (a) { return document.getElementById(a.getAttribute('data-toc')) })
      .filter(Boolean)
    var mark = function () {
      var best = 0
      for (var i = 0; i < targets.length; i++) {
        if (targets[i].getBoundingClientRect().top <= 90) best = i
      }
      tocLinks.forEach(function (a, i) {
        a.classList.toggle('text-foreground', i === best)
        a.classList.toggle('font-medium', i === best)
        a.classList.toggle('text-muted-foreground/60', i !== best)
      })
    }
    var main = document.querySelector('main')
    ;(main || window).addEventListener('scroll', mark, { passive: true })
    window.addEventListener('scroll', mark, { passive: true })
    mark()
  }

  // ---- search -------------------------------------------------------------
  var overlay = document.getElementById('search-overlay')
  var input = document.getElementById('search-input')
  var results = document.getElementById('search-results')
  var openBtn = document.getElementById('search-open')
  var index = null

  function load() {
    if (index) return Promise.resolve(index)
    return fetch((window.__BASE__ || './') + 'assets/search-index.json')
      .then(function (r) { return r.json() })
      .then(function (j) { index = j; return j })
      .catch(function () { index = []; return index })
  }
  function openSearch() {
    if (!overlay) return
    overlay.classList.remove('hidden')
    load().then(function () { input && input.focus() })
  }
  function closeSearch() { overlay && overlay.classList.add('hidden') }

  openBtn && openBtn.addEventListener('click', openSearch)
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch() }
    if (e.key === 'Escape') closeSearch()
  })
  overlay && overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch() })

  input && input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase()
    if (!results) return
    if (q.length < 2) { results.innerHTML = ''; return }
    var terms = q.split(/\s+/)
    var hits = (index || [])
      .map(function (e) {
        var hay = (e.t + ' ' + e.x).toLowerCase()
        var score = 0
        for (var i = 0; i < terms.length; i++) {
          if (e.t.toLowerCase().indexOf(terms[i]) >= 0) score += 8
          var n = hay.split(terms[i]).length - 1
          if (!n) return null
          score += Math.min(n, 5)
        }
        var at = (e.x || '').toLowerCase().indexOf(terms[0])
        return { e: e, score: score, snippet: at >= 0 ? e.x.slice(Math.max(0, at - 50), at + 110) : (e.x || '').slice(0, 140) }
      })
      .filter(Boolean)
      .sort(function (a, b) { return b.score - a.score })
      .slice(0, 20)

    results.innerHTML = hits.length
      ? hits
          .map(function (h) {
            return (
              '<a href="' + (window.__BASE__ || './') + h.e.p + '" class="block px-4 py-2.5 border-b border-border/50 hover:bg-accent/50 transition-colors">' +
              '<div class="text-sm font-medium">' + esc(h.e.t) + (h.e.s === 'source' ? ' <span class="text-[10px] uppercase tracking-wider text-muted-foreground/50">source</span>' : '') + '</div>' +
              '<div class="text-xs text-muted-foreground line-clamp-2 mt-0.5">' + esc(h.snippet) + '</div></a>'
            )
          })
          .join('')
      : '<div class="px-4 py-6 text-sm text-muted-foreground">No matches.</div>'
  })

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }
})()
