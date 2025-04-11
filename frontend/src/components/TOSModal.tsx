const TOSModal = () => (
  <dialog id="tos-modal" className="modal">
    <div className="modal-box">
      <h3 className="font-bold text-lg">terms of service</h3>
      <strong>by commissioning me, you agree to the following</strong>
      <ul className="list-disc list-inside my-2">
        <li>
          if you'd like to use my art commercially, we need to discuss and
          confirm in advance.
        </li>
        <li>
          i keep the rights to my art (sharing/portfolio/artbooks/editorials).
        </li>
        <li>please credit me (@serevarin) and/or link back when posting.</li>
        <li>no NFTs or AI training with my art. period.</li>
      </ul>
      <h3 className="font-bold text-lg mt-4">payment</h3>
      <ul className="list-disc list-inside my-2">
        <li>payment upfront via boosty / hipolink / lavatop.</li>
        <li>
          changes during sketch phase are okay; post-final tweaks may cost
          extra.
        </li>
        <li>
          i don’t accept chargebacks or cancellations unless i personally can’t
          complete your commission.
        </li>
      </ul>
      <div className="modal-action">
        <form method="dialog">
          <button className="btn btn-primary" type="submit">
            okay!
          </button>
        </form>
      </div>
    </div>
  </dialog>
)

export default TOSModal
