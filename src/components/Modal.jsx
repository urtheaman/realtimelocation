const Modal = (props) => {
    const classes = "w-13/12 max-w-4xl p-8 bg-white z-10 " + props.className;
    return (
      <div className='fixed left-0 right-0 top-0 bottom-0 bg-modal z-9'>
        <div className={classes}>{props.children}</div>
      </div>
    );
}

export default Modal
