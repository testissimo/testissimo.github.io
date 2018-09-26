testissimo.on('signup', function(){
    console.warn('on signup');
});

function hideStartSection(){
    document.getElementById('signUpSection').classList.add('hide-me');
    document.getElementById('showOffSection').classList.remove('hide-me');
    smoothScroll('showOffSection');
}