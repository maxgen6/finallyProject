
const  accordionPerformance = () => {
    const accordions = document.querySelectorAll('.accordion');
    for (const accordion of accordions) {
        const tabPanels = accordion.querySelectorAll('.panel-collapse');
        
        accordion.addEventListener('click', event => {
            if (event.target.classList.contains('next')) {
                const currentTab = event.target.closest('.panel-collapse');
                currentTab.classList.remove('in');
                const nextTab = currentTab.closest('.panel').nextElementSibling.querySelector('.panel-collapse');
                nextTab.classList.add('in');
                event.preventDefault();
            } else {
                let target = event.target;
                if (!target.classList.contains('panel-heading')) {
                    target = target.closest('.panel-heading');
                }
                if (!target) {
                    return;
                }
                for (const tabPanel of tabPanels) {
                    tabPanel.classList.remove('in');
                }
                const panel = target.closest('.panel');
                panel.querySelector('.panel-collapse').classList.add('in');
                event.preventDefault();
            }
        });
    }
};
export default accordionPerformance;