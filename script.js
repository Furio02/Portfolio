//Faq function

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        if(!faq.classList.contains("active")){
            faqs.forEach(faq => {
                faq.classList.remove("active");
            });
            faq.classList.add("active");
        }else{
            faq.classList.remove("active");
        }
    });
});

// Sliding feature card on scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    })
});

const hiddenCard = document.querySelectorAll('.card');
hiddenCard.forEach((el) => observer.observe(el));