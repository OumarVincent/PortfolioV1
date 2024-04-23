'use strict';

async function in_animations()
{
	await sleep(500);
	home_in_animations();
	about_in_animations();
}

window.onload = () => {
    document.documentElement.scrollLeft = 0;

    header_events();
    home_events();
    projects_events();
    skills_events();
    experience_events();

    in_animations();
    videos_events();

    // Check if the element exists before trying to access its style property
    let safariWarningElement = document.querySelector('#safari_warning');
    if (safariWarningElement) {
        safariWarningElement.style.display = 'none';
    }

    // Check if the element exists before trying to access its style property
    let loadingScreenElement = document.querySelector('#loading_screen');
    if (loadingScreenElement) {
        loadingScreenElement.style.display = 'none';
        window.setTimeout(() => {
            let lcpElement = document.querySelector('#lcp');
            if (lcpElement) {
                lcpElement.style.display = 'none';
            }
        }, 100);
    }
};
