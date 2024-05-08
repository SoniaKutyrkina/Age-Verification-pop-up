window.onload = function() {
    showModal();
};

function showModal() {
    var modal = document.getElementById('ageVerificationModal');
    modal.style.display = 'block';
    document.querySelector('.close-button').onclick = function() {
        modal.style.animation = 'fadeOutBounce 0.6s ease-out forwards';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 600);
    };
}

function verifyAge() {
    var modal = document.getElementById('ageVerificationModal');
    modal.style.animation = 'fadeOutBounce 0.6s ease-out forwards';
    setTimeout(() => {
        modal.style.display = 'none';
        window.location.href = '/shop'; 
    }, 600);
}

function goBack() {
    var modal = document.getElementById('ageVerificationModal');
    modal.style.animation = 'fadeOutBounce 0.2s ease-out forwards';
    setTimeout(() => {
        modal.style.display = 'none';
        window.history.back();
    }, 600);
}
