export const toggleMobileMenu = () =>{
    $('.toggle-menu').on('click', function(){
    $('.popup').toggleClass('active');
    $('body').toggleClass('block-scroll');
});
}

export const toggleInfoCourse = () => {
    $('.toggleInfoBtn').on('click', function(){
    $('.toggleInfoBtn').toggleClass('active');
});
}

