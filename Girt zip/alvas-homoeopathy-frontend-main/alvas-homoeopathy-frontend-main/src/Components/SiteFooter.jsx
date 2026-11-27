const socialLinks = [
  ['Facebook', 'https://m.facebook.com/ahmc.official/'],
  ['Instagram', 'https://instagram.com/ahmc.official?igshid=177ug59wuzplk'],
  ['X', 'https://twitter.com/OfficialAhmc?s=09'],
  ['YouTube', 'https://www.youtube.com/channel/UCy8HW-j_mFfEQRf-vnx4oYw'],
]

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap site-footer__inner">
        <p className="site-footer__brand">Follow Alva’s Homoeopathic Medical College</p>
        <nav className="site-footer__social-links" aria-label="Social media">
          {socialLinks.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default SiteFooter
