const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

questions.forEach(q => {
    q.addEventListener('click', (e) => {
        // if the question is already open, close it, swap answer from 'expand' to 'collapse' --
        if (q.classList.contains('open')) {
            q.classList.remove('open');
            q.closest('.item').querySelector('.answer').classList.remove('expand');
            q.closest('.item').querySelector('.answer').classList.add('collapse');
            q.closest('.item').querySelector('.arrow').classList.remove('flipped');
        } else {
            // otherwise add 'open' class to only that question and remove 'open' class from any others
            // while swapping 'expand' and 'collapse' appropriately
            questions.forEach(q2 => {
                if (q === q2) {
                    q2.classList.add('open');
                    q2.closest('.item').querySelector('.answer').classList.remove('collapse');
                    q2.closest('.item').querySelector('.answer').classList.add('expand');
                    q2.closest('.item').querySelector('.arrow').classList.add('flipped');
                } else if (q2.classList.contains('open')) {
                    q2.classList.remove('open');
                    q2.closest('.item').querySelector('.answer').classList.remove('expand');
                    q2.closest('.item').querySelector('.answer').classList.add('collapse');
                    q2.closest('.item').querySelector('.arrow').classList.remove('flipped');
                }
            })
        }
    })
})  