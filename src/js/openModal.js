const refs = {
    footerButton: document.querySelector( '.footer-contacts-btn' ),
    popupCloseButton: document.querySelector( '.popup-btn' ),
    modalCloseButton: document.querySelector( '.modal-btn' ),
    modalBackdrop: document.querySelector( '.modal-backdrop' ),
    popupBackdrop: document.querySelector( '.popup-backdrop' ),
    input: document.querySelectorAll( 'input' ),
    popup: document.querySelector( '.popup' ),
};


const openModal = () => {
    refs.modalBackdrop.classList.remove( 'is-hidden' );
    refs.input.forEach( function ( inp ) {
        inp.value.length > 0
            ? inp.value = ''
            : refs.modalBackdrop.classList.add( 'is-hidden' );
    } );
};

const closePopup = () => refs.popup.classList.add( 'is-hidden' );

const closeModal = () => refs.modalBackdrop.classList.add( 'is-hidden' );


refs.footerButton.addEventListener( 'click', openModal );
refs.popupCloseButton.addEventListener( 'click', closePopup );
refs.modalCloseButton.addEventListener( 'click', closeModal );
