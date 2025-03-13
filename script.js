function changeColor(id) {
    document.querySelectorAll('.desc-delivery').forEach(el => {
        el.style.color = ''; 
    });
    document.getElementById(id).style.color = '#fa4300';
}
function setActive(clickedBtn) {
    // Reset semua tombol dulu
    document.querySelectorAll('.btn3','.btn4','btn5').forEach(btn => {
        btn.classList.remove('active');
    });

    // Tambahkan class 'active' ke tombol yang diklik
    clickedBtn.classList.add('active');
}