
// information about courses
export const courseInfo = () => {
    let div = document.getElementsByClassName('courses-container');
    const contentCourse = `
                <div class="container">
                    <div class="container-text">
                        <div class="text-user">
                            <div class="user-name">
                                <img src="image/avatar.svg" alt="">
                                <p class="inter-400-14px">Иван Иванов</p>
                            </div>
                            <div class="user-point">
                                <img src="image/reviewBlack.svg" alt="">
                                <p class="inter-400-14px">4.5</p>
                            </div>
                        </div>
                        <p class="inter-400-18px">Курс “Цифровое исскуство”</p>
                        <p class="inter-400-14px">За 9 месяцев научитесь создавать цифровое искусство для рекламы, игр, кино и других сфер.</p>
                    </div>
                    <div class="container-btn inter-400-14px">
                        <p>Подробнее</p>
                    </div>
                </div>`; 

    for(let i = 0; i < 9; i++) {
        div[0].innerHTML += contentCourse;
    }
    return div;
}

// reviews
export const scrollInforeviews = () => {
    let div = document.getElementsByClassName('reviews-item');
    const contentReviews = `
    <div class="reviews-container">
        <div class="text-user">
            <div class="user">
                <div class="user-name">
                    <img src="image/avatar.svg" alt="">
                    <p class="inter-400-14px">Иван Иванов</p>
                </div>
                <div class="user-point">
                <img src="image/reviewGrean.svg" alt="">
                <p class="inter-400-14px reviewColorGrean">4</p>
                </div>
            </div>
            <p id="dateReview" class="inter-400-14px">21.06.25</p>
        </div>
        <p class="inter-400-18px">Очень крутой курс! </p>
        <p class="inter-400-14px">За 9 месяцев меня научитесь создавать цифровое искусство для рекламы, игр, кино и других сфер!</p>
    </div>`;
    for(let i = 0; i < 15; i++) {
        div[0].innerHTML += contentReviews;
    }
    return div;
};



