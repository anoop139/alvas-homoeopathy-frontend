import './BulletinFooter.css'

function BulletinFooter() {
  return (
    <footer className="bulletin-shared-footer">
      <p className="bulletin-shared-footer__college">Alva's Homoeopathic Medical College</p>
      <address>Mijar, Shobhavan Campus, Moodbidri, Mangalore &ndash; 574225</address>
      <div className="bulletin-shared-footer__developer">
        <p>Developed by C.K Developers</p>
        <p className="bulletin-shared-footer__email">
          <span>Email:</span>
          <a href="mailto:ck.offical.manager@gamil.com">ck.offical.manager@gamil.com</a>
        </p>
      </div>
    </footer>
  )
}

export default BulletinFooter


