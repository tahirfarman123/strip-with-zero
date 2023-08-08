const form = document.getElementById('multi-step-form');
        const progress = document.querySelector('.progress-bar');
        const steps = Array.from(document.querySelectorAll('.step'));
        let currentStep = 0;

        function updateProgress() {
            const progressPercent = (currentStep / (steps.length - 1)) * 100;
            progress.style.width = `${progressPercent}%`;
        }

        function showStep(stepIndex) {
            steps.forEach((step, index) => {
                step.style.display = index === stepIndex ? 'block' : 'none';
            });
            updateProgress();
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form submission logic here
            alert('Form submitted successfully!');
        });

        document.querySelectorAll('.next-step').forEach((button) => {
            button.addEventListener('click', () => {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    showStep(currentStep);
                }
            });
        });

        document.querySelectorAll('.prev-step').forEach((button) => {
            button.addEventListener('click', () => {
                if (currentStep > 0) {
                    currentStep--;
                    showStep(currentStep);
                }
            });
        });

        showStep(currentStep);