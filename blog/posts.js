/* ==========================================================
   HEM WORKS BLOG: POST LIST
   ----------------------------------------------------------
   To add a new post:
   1. Copy  _post-template.html  and rename it (e.g. my-new-post.html)
   2. Write your content inside it
   3. Add ONE line to the list below (newest post on top)

   That's it. The right-hand column on every blog page updates
   automatically, and the "Blog" menu item always opens the newest post.
   ========================================================== */

const BLOG_POSTS = [
  // ↓ Add new posts here (newest first)
  { title: "Getting to know and dress your body shape", url: "getting-to-know-your-body-shape.html" },
];

/* ---------- Sidebar renderer (no need to edit below) ---------- */
document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('post-list');
  if (!list) return;

  const current = decodeURIComponent(location.pathname.split('/').pop());

  list.innerHTML = BLOG_POSTS.map(function (post) {
    const isCurrent = post.url === current;
    const base = 'flex items-start gap-3 rounded-2xl px-3 py-2.5 font-bold text-sm sm:text-base leading-snug transition-colors';
    const state = isCurrent
      ? 'bg-white text-[#851ee8] shadow-sm border border-purple-100'
      : 'text-[#230d4e] hover:bg-white hover:text-[#851ee8] border border-transparent';
    return '<li><a href="' + post.url + '" class="' + base + ' ' + state + '"' +
           (isCurrent ? ' aria-current="page"' : '') + '>' +
           '<i class="fa-solid fa-heart text-[#851ee8] text-xs mt-1.5 shrink-0"></i>' +
           '<span>' + post.title + '</span></a></li>';
  }).join('');
});
