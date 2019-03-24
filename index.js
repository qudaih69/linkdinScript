function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// var limitPage = Number($('.artdeco-pagination__pages .active, .selected').find('span').text().trim());
var limitPage = prompt('Please, enter number page to add', '0');
var limitLi = $('.search-results__list').children().length;
for (let next = 0 ; next <= limitPage; next++) {
    await sleep(1000);

    for (let add = 1; add <= limitLi; add++) {
        $('html, body').animate({ scrollTop:  $('.search-results__list li:nth-child(' + add + ')').offset().top}, 'slow');
        $('.search-results__list li:nth-child(' + add + ')').css({
            backgroundColor: '#FAEBD7'
        });
        await sleep(500);
        if($('.search-results__list li:nth-child(' + add + ')').find('button').text().trim() === 'Se connecter') {
            $('.search-results__list li:nth-child(' + add + ')').css({
                backgroundColor: '#87CEEB'
            })
            $('.search-results__list li:nth-child(' + add + ')').find('button').click();
            await sleep(1000);
            $('.button-primary-large').click();
            await sleep(1000);
        }
    }

    await sleep(500);
    console.log('next :', next, ' limitpage :', limitPage);
    if (next < limitPage){
        console.log('next > limipage', $('.artdeco-pagination__button--next')[0]);
        $('.artdeco-pagination__button--next')[0].click();
    } 
}
