const container = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.card');

    let startX = 0;
    let currentCard = null;

    cards.forEach(card => {
      card.addEventListener('mousedown', (e) => {
        currentCard = card;
        startX = e.clientX;
        card.style.transition = 'none';
        card.style.cursor = 'grabbing';
      });

      document.addEventListener('mousemove', (e) => {
        if (!currentCard) return;
        const dx = e.clientX - startX;
        currentCard.style.transform = `translateX(${dx}px) rotate(${dx * 0.1}deg)`;
      });

      document.addEventListener('mouseup', (e) => {
        if (!currentCard) return;
        const dx = e.clientX - startX;
        const threshold = container.offsetWidth / 3;

        if (Math.abs(dx) > threshold) {
          const direction = dx > 0 ? 1 : -1;
          currentCard.style.transform = `translateX(${direction * 1000}px) rotate(${direction * 45}deg)`;
          currentCard.style.opacity = '0';
          currentCard.addEventListener('transitionend', () => {
            currentCard.remove();
            updateCardStack();
          }, { once: true });
        } else {
          currentCard.style.transition = 'transform 0.3s';
          currentCard.style.transform = 'translateX(0) rotate(0)';
        }

        currentCard.style.cursor = 'grab';
        currentCard = null;
      });
    });

    function updateCardStack() {
      const remainingCards = document.querySelectorAll('.card');
      remainingCards.forEach((card, index) => {
        card.style.transition = 'transform 0.3s, opacity 0.3s';
        if (index === remainingCards.length - 1) {
          card.style.transform = 'scale(0.9)';
          card.style.opacity = '0.8';
        } else if (index === remainingCards.length - 2) {
          card.style.transform = 'scale(0.95)';
          card.style.opacity = '0.9';
        } else {
          card.style.transform = 'none';
          card.style.opacity = '1';
        }
      });
    }