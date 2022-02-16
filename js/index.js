document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-work__step-link').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.section-work__step-link').forEach(function(tabContent){
                tabContent.classList.remove('section-work__step-link-active')
            })

            event.currentTarget.classList.add('section-work__step-link-active')
            
            document.querySelectorAll('.section-work__content').forEach(function(tabContent) {
                tabContent.classList.remove('section-work__content-active')
            })
            console.log(path)
            document.querySelector(`[data-target="${path}"]`).classList.add('section-work__content-active')
        })
    })  
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })
    $(document).ready(function(){
        $('#burger').click(function(){
            $(this).toggleClass('open');
        });
    });
})