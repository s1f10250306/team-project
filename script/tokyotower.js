document.addEventListener('DOMContentLoaded', function() {
    // ヒーローセクションのコンテンツをアニメーションさせる
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('is-visible');
    }

    // スクロールでアニメーションする要素全てを取得
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const gridItems = document.querySelectorAll('.image-grid .grid-item');
    const featureItems = document.querySelectorAll('.feature-grid .feature-item');
    const callToAction = document.querySelector('.call-to-action');


    const observerOptions = {
        root: null, // ビューポートをルートとする
        rootMargin: '0px 0px -10% 0px', // ビューポートの下端から10%手前で検知
        threshold: 0.1 // 要素が10%以上表示されたら検知
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 要素がビューポートに入ったら
                entry.target.classList.add('is-visible');
                // 一度表示されたら監視を停止する（繰り返し表示させたい場合は削除）
                observer.unobserve(entry.target);
            }
            // 画面外に出た時に消すアニメーションをつけたい場合 (今回の質問には合致しないが参考として)
            // else {
            //     entry.target.classList.remove('is-visible');
            // }
        });
    }, observerOptions);

    // 各セクションにオブザーバーを適用
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // 各グリッドアイテムにオブザーバーを適用
    gridItems.forEach(item => {
        observer.observe(item);
    });

    // 各特徴アイテムにオブザーバーを適用
    featureItems.forEach(item => {
        observer.observe(item);
    });

    // コールトゥアクションにもオブザーバーを適用
    if (callToAction) {
        observer.observe(callToAction);
    }
});