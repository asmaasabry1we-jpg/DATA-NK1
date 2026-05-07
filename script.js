/**
 * 1. وظيفة التبديل بين قطاعات المشاريع (التنمية والتكنولوجيا)
 */
function showSector(sectorId) {
    // جلب جميع أقسام المحتوى وإخفائها
    const sectors = document.querySelectorAll('.sector-content');
    sectors.forEach(sector => {
        sector.style.display = 'none';
        sector.classList.remove('active');
    });

    // إظهار القسم المطلوب مع تأثير انسيابي بسيط
    const targetSector = document.getElementById(sectorId + '-sector');
    if (targetSector) {
        targetSector.style.display = 'block';
        setTimeout(() => {
            targetSector.classList.add('active');
        }, 50);
    }

    // تحديث شكل الأزرار (تغيير الزر النشط)
    const btnDev = document.getElementById('btn-dev');
    const btnTech = document.getElementById('btn-tech');
    
    if (btnDev && btnTech) {
        btnDev.classList.remove('active');
        btnTech.classList.remove('active');

        if (sectorId === 'dev') {
            btnDev.classList.add('active');
        } else {
            btnTech.classList.add('active');
        }
    }

    // إغلاق قائمة الموبايل (Navbar) تلقائياً بعد اختيار قطاع
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && window.innerWidth < 992) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }
}

/**
 * 2. وظيفة مراقبة التمرير (ظهور العناصر عند النزول للأسفل)
 */
function handleScroll() {
    const items = document.querySelectorAll('.horizontal-project, .about-card');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        // التحقق إذا كان العنصر دخل في نطاق الرؤية
        const isVisible = (rect.top <= (window.innerHeight - 100));
        if (isVisible) {
            item.classList.add('active-reveal');
        }
    });
}

/**
 * 3. تشغيل الوظائف عند تحميل الصفحة بالكامل
 */
document.addEventListener('DOMContentLoaded', () => {
    // تشغيل قطاع التنمية كقطاع افتراضي فور فتح الموقع
    showSector('dev');

    // تفعيل مراقب التمرير (Scroll)
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // تشغيل الأنميشن للعناصر الظاهرة فوراً عند التحميل

    // تجميد حركة شريط الشركاء عند وضع الماوس عليه
    const track = document.querySelector('.logos-track');
    if (track) {
        track.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        track.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    }
});