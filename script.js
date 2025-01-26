// Splash Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('background-music').play();
    }, 3000); // 3-second splash screen
});

// Arcade Functionality
const nftImages = ['assets/NFT1.jpeg', 'assets/NFT2.jpeg', 'assets/NFT3.jpeg', 'assets/NFT4.jpeg','assets/NFT.jpeg']; // Add your NFT images
let currentIndex = 0;
const phase1Wallets = ['wallet1', 'wallet2']; // Wallets eligible for Phase 1
const phase2Wallets = ['wallet3', 'wallet4']; // Wallets eligible for Phase 2
const clickSound1 = document.getElementById('click-sound-1');
const clickSound2 = document.getElementById('click-sound-2');
const aura = document.querySelector('.aura');

document.getElementById('left').addEventListener('click', () => {
    clickSound1.play();
    if (navigator.vibrate) navigator.vibrate(50);
    currentIndex = (currentIndex - 1 + nftImages.length) % nftImages.length;
    document.getElementById('nft-image').src = nftImages[currentIndex];
    aura.style.background = 'radial-gradient(circle, rgba(0, 255, 0, 0.5), transparent)';
});

document.getElementById('right').addEventListener('click', () => {
    clickSound2.play();
    if (navigator.vibrate) navigator.vibrate(50);
    currentIndex = (currentIndex + 1) % nftImages.length;
    document.getElementById('nft-image').src = nftImages[currentIndex];
    aura.style.background = 'radial-gradient(circle, rgba(0, 0, 255, 0.5), transparent)';
});

document.getElementById('check-wallet').addEventListener('click', () => {
    const walletId = document.getElementById('wallet-id').value;
    const walletStatus = document.getElementById('wallet-status');

    if (phase1Wallets.includes(walletId)) {
        walletStatus.textContent = 'Congratulations! You are eligible for Phase 1.';
        walletStatus.style.color = '#39FF14'; // Green color
    } else if (phase2Wallets.includes(walletId)) {
        walletStatus.textContent = 'Congratulations! You are eligible for Phase 2.';
        walletStatus.style.color = '#39FF14'; // Green color
    } else {
        walletStatus.textContent = 'Better luck next time! You are not eligible.';
        walletStatus.style.color = 'red'; // Red color
    }
});

// Music Toggle
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

musicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.textContent = '🎵 ON';
    } else {
        backgroundMusic.pause();
        musicToggle.textContent = '🎵 OFF';
    }
});