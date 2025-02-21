window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.classList.add("hidden");
});
window.onload = function () {
    const portfolioContainer = document.querySelector('.portfolio');
    portfolioContainer.style.display = 'none';
    portfolioContainer.offsetHeight; // Force reflow
    portfolioContainer.style.display = 'grid';
};
 
const roles = ["3D Artist", "Unreal Engine Developer",  "Gamer", "Content Creator"];
  let index = 0;
  
  setInterval(() => {
    index = (index + 1) % roles.length;
    document.querySelector('.changing-text').textContent = roles[index];
  }, 4000);


        document.addEventListener("DOMContentLoaded", function () {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelector(".progress-bar").style.width = entry.target.getAttribute("data-progress") + "%";
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll(".skill").forEach(skill => {
                observer.observe(skill);
            });
        });

        const navLinks = document.getElementById('nav-links');

        document.addEventListener('click', (event) => {
            if (event.target.closest('nav')) {
                navLinks.classList.toggle('active');
            } else {
                navLinks.classList.remove('active');
            }
        });

        document.addEventListener("DOMContentLoaded", function () {
            const lightbox = document.getElementById("lightbox");
            const lightboxImage = document.getElementById("lightbox-image");
            const closeLightbox = document.getElementById("close-lightbox");
            const portfolioImages = document.querySelectorAll(".portfolio-image");
        
            // Open lightbox when an image or video is clicked
            portfolioImages.forEach(media => {
                media.addEventListener("click", () => {
                    if (media.tagName.toLowerCase() === "img") {
                        lightboxImage.src = media.src; // Set the lightbox image source
                    } else if (media.tagName.toLowerCase() === "video") {
                        lightboxImage.src = media.poster; // Use the video poster as the lightbox image
                    }
                    lightbox.style.display = "block"; // Show the lightbox
                });
            });
        
            // Close lightbox when the close button is clicked
            closeLightbox.addEventListener("click", () => {
                lightbox.style.display = "none"; // Hide the lightbox
            });
        
            // Close lightbox when clicking outside the image
            lightbox.addEventListener("click", (e) => {
                if (e.target === lightbox) {
                    lightbox.style.display = "none"; // Hide the lightbox
                }
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
        const filterButtons = document.querySelectorAll(".filter-buttons button");
        const portfolioItems = document.querySelectorAll(".portfolio-item");
        
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                const filter = button.getAttribute("data-filter");
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                
                portfolioItems.forEach(item => {
                    if (filter === "all" || item.classList.contains(filter)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const portfolioItems = document.querySelectorAll(".portfolio-item");
    
        portfolioItems.forEach(item => {
            const media = item.querySelector("img, video"); // Get the image or video inside the item
            if (media) {
                // Wait for the image/video to load
                media.onload = () => {
                    classifyItem(item, media);
                };
                // If it's a video, wait for the metadata to load
                if (media.tagName.toLowerCase() === "video") {
                    media.onloadedmetadata = () => {
                        classifyItem(item, media);
                    };
                }
            }
        });
    
        function classifyItem(container, media) {
            const aspectRatio = media.naturalWidth / media.naturalHeight; // Calculate aspect ratio
            if (aspectRatio > 1) {
                container.classList.add("landscape"); // Add landscape class for wider images
            } else {
                container.classList.add("portrait"); // Add portrait class for taller images
            }
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
