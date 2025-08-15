var player = undefined;
        
        // 暗黑模式切换功能
        function toggleTheme() {
            const html = document.documentElement;
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            const currentTheme = body.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                body.removeAttribute('data-theme');
                html.removeAttribute('data-theme');
                themeIcon.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                html.setAttribute('data-theme', 'dark');
                themeIcon.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            }
        }
        
        // 页面加载时恢复主题设置
        document.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme');
            const themeIcon = document.getElementById('theme-icon');
            const html = document.documentElement;
            const body = document.body;
            
            if (savedTheme === 'dark') {
                body.setAttribute('data-theme', 'dark');
                html.setAttribute('data-theme', 'dark');
                themeIcon.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeIcon.innerHTML = '<i class="fas fa-moon"></i>';
            }
            
            // 初始化FAQ交互功能
            initFAQ();
        });
        
        // FAQ交互功能
        function initFAQ() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const h3 = item.querySelector('h3');
                if (h3) {
                    h3.addEventListener('click', function() {
                        // 切换当前项的active状态
                        item.classList.toggle('active');
                    });
                }
            });
        }
        
        // 语言切换下拉框功能
        function toggleLanguageDropdown() {
            const dropdown = document.getElementById('languageDropdown');
            dropdown.classList.toggle('show');
        }
        
        // 点击页面其他地方时关闭下拉框
        document.addEventListener('click', function(event) {
            const languageSelector = document.querySelector('.language-selector');
            const dropdown = document.getElementById('languageDropdown');
            
            if (languageSelector && !languageSelector.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
        
        function play() {
            let url = $("#url").val()

            if(player === undefined) {
                player = TCPlayer('player-container-id', {
                sources: [{
                    src: url,
                }],
                // licenseUrl需自己去腾讯云申请
                licenseUrl: 'https://license.vod2.myqcloud.com/license/v2/1252819296_1/v_cube.license',
            }); 
            }
            player.pause();
            console.log(url)
            player.src(url); // url 播放地址
        }