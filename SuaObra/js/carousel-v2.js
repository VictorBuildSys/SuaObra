document.addEventListener("DOMContentLoaded", function() {
    var testiomnialData = [
        {
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocI07Kxq8-Ewaac4oDq-47E-r0WVCwWByT_6C3hnHFugu7EYCQ=w75-h75-p-rp-mo-br100",
            name: "SUELI APARECIDA RODRIGUES",
            review: "Atendimento de excelência!!! Felipe e Caio super atenciosos!!! Estão fazendo o planejamento do pagamento do INSS de obra da minha construção com muito zelo <a class='bold highlight' target='_blank' alt='ir para avaliações' href='https://search.google.com/local/reviews?placeid=ChIJh7B0itHBzpQRZgZ9u4kvpVs'>(...)</a>"
        },
        {
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWgIKzP8Cn8ABwzMu0oPxH3yNGFLdm-NR_m0fcyQXPED0ruWsuM=w75-h75-p-rp-mo-br100",
            name: "Fink Consultoria Empresarial",
            review: "Parceiros extremamente qualificados e profissionais. Atendimento detalhado com estratégias e soluções eficientes!"
        },
        {
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUSX_sFAMts63hG-nApqLM6FBQEJceed8sNfLwuIhGryQrj2SA=w75-h75-p-rp-mo-br100",
            name: "Alexandre Marinho da Silva",
            review: "Empresa altamente qualificada para o desenvolvimento dos jobs oferecidos, atendimento rápido e humanizado. <a class='bold highlight' target='_blank' alt='ir para avaliações' href='https://search.google.com/local/reviews?placeid=ChIJh7B0itHBzpQRZgZ9u4kvpVs'>(...)</a>"
        },
        {
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocKUNGyIgB-Kf80Ei0_f5zfkC8zfwDKjDKJyZPcio8rl1loEqA=w75-h75-p-rp-mo-br100",
            name: "Junior Nogueira",
            review: "Profissionais de excelência, trabalho eficaz e transparente! Recomendo!!!"
        }, {
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocI4YSREJXL8s3ZOuiWXohtQN8KxAqNpU97Toh_1KcG-1DVE3w=w75-h75-p-rp-mo-br100",
            name: "Igão DH",
            review: "Serviço inovador e muito necessário. A redução de custos gerada compensa e muito a contratação, recomendo."
        }, {
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ4s-fhPsf5-PLoupn6AcYcTwgYjphnz5JhzshIBwbASLUxyYrk=w75-h75-p-rp-mo-br100",
            name: "Beatriz Custódio",
            review: "A minha experiência com a FM foi excepcional. Desde o primeiro contato, o atendimento foi extremamente simpático e profissional <a class='bold highlight' target='_blank' alt='ir para avaliações' href='https://search.google.com/local/reviews?placeid=ChIJh7B0itHBzpQRZgZ9u4kvpVs'>(...)</a>"
        }, {
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWKAA7bstGCkaRW5ND6uJ0jlgTY456IgrtQxkxdiL8xE8VYXmpSMA=w75-h75-p-rp-mo-ba3-br100",
            name: "Laís Martins",
            review: "Tive uma experiência ímpar com a FM. Profissionais super preparados, atendimento claro e objetivo, passando segurança <a class='bold highlight' target='_blank' alt='ir para avaliações' href='https://search.google.com/local/reviews?placeid=ChIJh7B0itHBzpQRZgZ9u4kvpVs'>(...)</a>"
        }]
    var slideHolder = document.querySelector("#slideHolder")
    for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}" alt="imagem de perfil"></div><div class="ContentHolder"><p class="h6 name">${i.name}</p><p class="description">${i.review}</p><p class="highlight bold h6">&#9733; &#9733; &#9733; &#9733; &#9733;</p></div></div>`
    
    const swiper = new Swiper('#craouselContainer', {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2.3,
        loop: true,
        spaceBetween: 30,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            depth: 800,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
    window.onresize = queryResizer
    queryResizer()
    function queryResizer() {
        if (window.innerWidth < 724) swiper.params.slidesPerView = 2
        if (window.innerWidth > 501) swiper.params.slidesPerView = 2
        if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
        if (window.innerWidth < 501) swiper.params.slidesPerView = 1
        swiper.update()
    }

});