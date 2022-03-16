export default class ShowInfo {
    constructor (triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const sibling = btn.closest('.module__info-show').nextElementSibling;

                sibling.classList.toggle('msg');
                sibling.style.marginTop = '20px';
                sibling.classList.add('animated', 'fadeIn');

                if (!sibling.classList.contains('msg')) {                    
                    btn.style.transform = 'translateX(-50%) translateY(-50%) rotate(45deg)';
                    btn.style.transition = 'all 0.3s';                    
                } else {
                    btn.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg)';
                }
            });
        });
    }
}