'use strict';

function skills_events() {
    function events() {
        // Sélectionnez toutes les catégories du menu
        const categories = document.querySelectorAll('#skills_section .menu .category');

        // Sélectionnez l'élément de la barre de sélection
        const selector = document.querySelector('#skills_section .menu .selector');

        // Par défaut, la première catégorie est sélectionnée
        let selectedCategoryIndex = 0;

        // Ajoutez un écouteur d'événement de clic à chaque catégorie
        categories.forEach((category, index) => {
            category.addEventListener('click', () => {
                // Définissez la catégorie sélectionnée comme non sélectionnée
                categories[selectedCategoryIndex].style.cursor = 'pointer';
                // Masquez la liste de compétences de la catégorie précédente
                document.querySelector(`#skills_section .box_content .skills_list:nth-child(${selectedCategoryIndex + 1})`).style.display = 'none';

                // Mettez à jour la catégorie sélectionnée
                selectedCategoryIndex = index;

                // Définissez la nouvelle catégorie comme désactivée pour les clics
                category.style.cursor = 'default';

                // Affichez la liste de compétences de la catégorie sélectionnée
                const selectedSkillsList = document.querySelector(`#skills_section .box_content .skills_list:nth-child(${selectedCategoryIndex + 1})`);
                selectedSkillsList.style.display = 'grid';

                // Mettez à jour la position de la barre de sélection
                const categoryHeight = 100 / categories.length;
                selector.style.top = `${categoryHeight * selectedCategoryIndex}%`;
            });
        });

        // Sélectionnez la première catégorie au chargement de la page
        categories[selectedCategoryIndex].click();
    }

    function generate_skills(my_data) {
        let box = document.querySelector('#skills_section .box');
        box.innerHTML = '';

        if (window.innerWidth > 930) {
            let menu = '';
            let box_content = '';

            menu += `<div class="selector" style="height: calc(100% / ${my_data.skills_categories.length})"></div>`;

            for (let category of my_data.skills_categories) {
                menu += `<div class="category">${category.name}</div>`;

                let skills = '';

                for (let skill of category.skills) {
                    skills += `<a class="skill" href="${skill.link}" target="_blank">
                        <img src="${skill.logo}" alt="${skill.name.toLowerCase()}" width="190px" height="190px"/>
                        <span>${skill.name}</span>
                    </a>`;
                }

                box_content += `<div class="skills_list">${skills}</div>`;
            }

            box.innerHTML = `<div class="menu">${menu}</div><div class="box_content">${box_content}</div>`;

            events();
        } else {
            for (let category of my_data.skills_categories) {
                box.innerHTML += `<div class="category_title">${category.name}</div>`;

                let skills = '';

                for (let skill of category.skills) {
                    skills += `<a class="skill" href="${skill.link}" target="_blank">
                        <img src="${skill.logo}" alt="${skill.name.toLowerCase()}" width="190px" height="190px"/>
                        <span>${skill.name}</span>
                    </a>`;
                }

                box.innerHTML += `<div class="box_content"><div class="skills_list">${skills}</div></div>`;
            }
        }
    }

    let prev_width = window.innerWidth;
    // Assurez-vous que read_json est définie dans votre code.
    // read_json('resources/jsons/skills.json', generate_skills);

    window.addEventListener('resize', () => {
        // Assurez-vous que read_json est définie dans votre code.
        // if ((prev_width >= 930 && window.innerWidth <= 930) || (prev_width <= 930 && window.innerWidth >= 930)) {
        //     read_json('resources/jsons/skills.json', generate_skills);
        //     prev_width = window.innerWidth;
        // }
    });
}

// Vous pouvez appeler la fonction skills_events lorsque le DOM est chargé.
document.addEventListener('DOMContentLoaded', () => {
    skills_events();
});
