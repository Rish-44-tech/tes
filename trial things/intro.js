

class HackingIntro {
    constructor() {
        this.terminalContent = document.getElementById('terminalContent');
        this.currentLine = 0;
        this.typingSpeed = 15; // milliseconds per character (was 50)
        this.lineDelay = 200; // milliseconds between lines (was 1000)
        this.matrixRain = document.getElementById('matrixRain');
        this.video = document.getElementById('hackingVideo');
        
        this.terminalScript = [
            { type: 'command', text: 'booting up elicit.exe', delay: 200 },
            { type: 'output', text: 'Launching innovation protocols...', delay: 150 },
            { type: 'command', text: 'connect great minds...', delay: 200 },
            { type: 'output', text: 'great minds connected. Productivity at 100%.', delay: 150 },
            { type: 'command', text: 'install techfest simulations', delay: 200 },
            { type: 'output', text: 'techfest simulations installed successfully! 🦄', delay: 150 },
            { type: 'command', text: 'run cool_idea.sh', delay: 200 },
            { type: 'output', text: ' Idea approved by Elicit.', delay: 150 },
            { type: 'command', text: 'echo "Welcome to the Future!"', delay: 200 },
            { type: 'output', text: 'Welcome to the Future!', delay: 200 },
            { type: 'progress', text: 'Loading awesomeness...', delay: 400 },
            { type: 'redirect', text: 'Startup sequence complete. Enjoy the ride!', delay: 1000 }
        ];

        this.init();
    }

    init() {
        // Start matrix rain effect
        this.matrixRainActive = true;
        this.startMatrixRain();
        
        // Start hacking background effects
        this.startHackingBackground();
        
        // Start terminal sequence
        setTimeout(() => {
            this.startTerminalSequence();
        }, 1000);

        // Force redirect to main page after 10 seconds, even if terminal is not done
        this.forceRedirectTimeout = setTimeout(() => {
            this.redirectToMain();
        }, 10000);
    }

    startMatrixRain() {
        // Create matrix rain effect
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
        const columns = Math.floor(window.innerWidth / 20);
        
        for (let i = 0; i < columns; i++) {
            this.createMatrixColumn(i);
        }
    }

    createMatrixColumn(columnIndex) {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = this.getRandomChar();
        char.style.left = columnIndex * 20 + 'px';
        char.style.animationDelay = Math.random() * 3 + 's';
        char.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        this.matrixRain.appendChild(char);
        
        // Remove and recreate for continuous effect
        setTimeout(() => {
            char.remove();
            this.createMatrixColumn(columnIndex);
        }, 5000);
    }

    getRandomChar() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
        return chars.charAt(Math.floor(Math.random() * chars.length));
    }

    startHackingBackground() {
        // Create binary rain
        this.createBinaryRain();
        
        // Create data stream
        this.createDataStream();
        
        // Create code rain
        this.createCodeRain();
    }

    createBinaryRain() {
        const binaryRain = document.getElementById('binaryRain');
        this.binaryColumnIntervals = [];
        this.binaryColumns = [];
        this.binaryRainSpawner = setInterval(() => {
            if (this.matrixRainActive) {
                const x = Math.random() * window.innerWidth;
                this.createBinaryColumn(binaryRain, null, x);
            }
        }, 150);
    }

    createBinaryColumn(container, columnIndex, leftOverride) {
        if (!this.matrixRainActive) return;
        const column = document.createElement('div');
        column.className = 'binary-column';
        column.style.left = leftOverride !== undefined ? `${leftOverride}px` : (columnIndex * 30 + 'px');
        column.style.animationDelay = Math.random() * 1 + 's';
        
        // Generate binary string
        let binaryString = '';
        for (let j = 0; j < 20; j++) {
            binaryString += Math.random() > 0.5 ? '1' : '0';
        }
        column.textContent = binaryString;
        
        // Dynamically update the binary string as it falls
        const interval = setInterval(() => {
            if (!this.matrixRainActive) return;
            let newString = '';
            for (let j = 0; j < 20; j++) {
                newString += Math.random() > 0.5 ? '1' : '0';
            }
            column.textContent = newString;
        }, 100);
        
        container.appendChild(column);
        this.binaryColumns.push(column);
        this.binaryColumnIntervals.push(interval);
        
        // Remove column after animation
        setTimeout(() => {
            clearInterval(interval);
            if (column.parentNode) column.remove();
        }, 4000);
    }

    createDataStream() {
        const dataStream = document.getElementById('dataStream');
        
        setInterval(() => {
            const packet = document.createElement('div');
            packet.className = 'data-packet';
            packet.style.top = Math.random() * window.innerHeight + 'px';
            packet.style.animationDelay = Math.random() * 3 + 's';
            
            // Random data packet
            const dataTypes = ['HTTP/1.1', 'GET /api', 'POST /login', 'TCP SYN', 'UDP', 'ICMP'];
            packet.textContent = dataTypes[Math.floor(Math.random() * dataTypes.length)];
            
            dataStream.appendChild(packet);
            
            setTimeout(() => {
                packet.remove();
            }, 3000);
        }, 500);
    }

    createCodeRain() {
        const codeRain = document.getElementById('codeRain');
        const codeSnippets = [
            'function hack() {', 'if (system.secure) {', 'break security();', 'access.granted();',
            'while (true) {', 'crack.password();', 'bypass.firewall();', 'inject.sql();',
            'exploit.buffer();', 'root.access();', 'system.compromised();', 'data.extract();'
        ];
        
        setInterval(() => {
            const drop = document.createElement('div');
            drop.className = 'code-drop';
            drop.style.left = Math.random() * window.innerWidth + 'px';
            drop.style.animationDelay = Math.random() * 3 + 's';
            
            drop.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            
            codeRain.appendChild(drop);
            
            setTimeout(() => {
                drop.remove();
            }, 3000);
        }, 800);
    }

    handleVideoFallback() {
        // If video fails to load, create CSS animation instead
        this.video.addEventListener('error', () => {
            this.createVideoFallback();
        });
    }

    createVideoFallback() {
        // Create animated background if video doesn't load
        const videoBackground = document.querySelector('.video-background');
        videoBackground.innerHTML = `
            <div style="
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, #000, #111, #000);
                animation: pulse 2s ease-in-out infinite;
            "></div>
        `;
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.6; }
            }
        `;
        document.head.appendChild(style);
    }

    startTerminalSequence() {
        this.displayNextLine();
    }

    displayNextLine() {
        if (this.currentLine >= this.terminalScript.length) {
            this.completeIntro();
            return;
        }

        const line = this.terminalScript[this.currentLine];
        
        if (line.type === 'progress') {
            this.displayProgressBar(line.text);
        } else if (line.type === 'redirect') {
            this.displayRedirect(line.text);
        } else {
            this.displayTerminalLine(line);
        }

        this.currentLine++;
    }

    displayTerminalLine(line) {
        const lineElement = document.createElement('div');
        lineElement.className = 'terminal-line';
        
        if (line.type === 'command') {
            lineElement.innerHTML = `<span class="command">$ ${line.text}</span>`;
        } else if (line.type === 'output') {
            lineElement.innerHTML = `<span class="output">${line.text}</span>`;
        }
        
        this.terminalContent.appendChild(lineElement);
        
        // Add typing effect
        setTimeout(() => {
            lineElement.classList.add('typing');
            setTimeout(() => {
                lineElement.classList.remove('typing');
                lineElement.classList.add('complete');
            }, Math.max(100, line.text.length * this.typingSpeed)); // Minimum 100ms per line
        }, 50);
        
        // Schedule next line
        setTimeout(() => {
            this.displayNextLine();
        }, Math.max(100, line.delay + (line.text.length * this.typingSpeed)));
    }

    displayProgressBar(text) {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'terminal-line';
        progressContainer.innerHTML = `
            <div class="output">${text}</div>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
        `;
        
        this.terminalContent.appendChild(progressContainer);
        
        // Animate progress bar
        setTimeout(() => {
            const progressFill = progressContainer.querySelector('.progress-fill');
            progressFill.style.width = '100%';
        }, 50);
        
        // Schedule next line
        setTimeout(() => {
            this.displayNextLine();
        }, 400);
    }

    displayRedirect(text) {
        const redirectElement = document.createElement('div');
        redirectElement.className = 'terminal-line';
        redirectElement.innerHTML = `<span class="success">${text}</span>`;
        redirectElement.classList.add('glitch-text');
        
        this.terminalContent.appendChild(redirectElement);
        
        // Redirect to main page after delay
        setTimeout(() => {
            this.redirectToMain();
        }, line.delay);
    }

    completeIntro() {
        // Final completion message
        const completionElement = document.createElement('div');
        completionElement.className = 'terminal-line';
        completionElement.innerHTML = '<span class="success">SYSTEM INITIALIZATION COMPLETE</span>';
        completionElement.classList.add('glitch-text');
        
        this.terminalContent.appendChild(completionElement);
        
        // Stop matrix rain and remove all binary columns
        this.matrixRainActive = false;
        if (this.binaryRainSpawner) clearInterval(this.binaryRainSpawner);
        if (this.binaryColumnIntervals) {
            this.binaryColumnIntervals.forEach(clearInterval);
        }
        if (this.binaryColumns) {
            this.binaryColumns.forEach(col => {
                if (col.parentNode) {
                    col.style.transition = 'opacity 0.5s';
                    col.style.opacity = '0';
                    setTimeout(() => { if (col.parentNode) col.remove(); }, 500);
                }
            });
        }
        // Redirect after completion
        setTimeout(() => {
            this.redirectToMain();
        }, 300);
    }

    redirectToMain() {
        // Stop matrix rain and remove all binary columns
        this.matrixRainActive = false;
        if (this.binaryRainSpawner) clearInterval(this.binaryRainSpawner);
        if (this.binaryColumnIntervals) {
            this.binaryColumnIntervals.forEach(clearInterval);
        }
        if (this.binaryColumns) {
            this.binaryColumns.forEach(col => {
                if (col.parentNode) {
                    col.style.transition = 'opacity 0.5s';
                    col.style.opacity = '0';
                    setTimeout(() => { if (col.parentNode) col.remove(); }, 500);
                }
            });
        }
        // Add transition effect
        document.body.style.transition = 'opacity 1s ease-out';
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
}

// Skip intro function
function skipIntro() {
    window.location.href = 'index.html';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new HackingIntro();
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    // Optional: Add cursor trail effect
    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.width = '2px';
    cursor.style.height = '2px';
    cursor.style.background = '#00ff00';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '1000';
    cursor.style.borderRadius = '50%';
    cursor.style.boxShadow = '0 0 10px #00ff00';
    
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.remove();
    }, 100);
});

// Add keyboard effects
document.addEventListener('keydown', (e) => {
    // Add glitch effect on key press
    const terminal = document.querySelector('.terminal-window');
    terminal.classList.add('glitch-text');
    
    setTimeout(() => {
        terminal.classList.remove('glitch-text');
    }, 300);
}); 