// Am I Cooked? — Main App Logic
(function() {
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);
  
  let countdownInterval = null;
  
  // Check URL params on load
  window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const job = params.get('job');
    if (job) {
      $('#job-input').value = job.replace(/-/g, ' ');
      checkJob();
    }
  });
  
  // Event listeners
  $('#check-btn').addEventListener('click', checkJob);
  $('#job-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkJob();
  });
  $('#check-another').addEventListener('click', () => {
    clearInterval(countdownInterval);
    $('#results').classList.remove('visible');
    $('#landing').classList.add('visible');
    $('#job-input').value = '';
    $('#job-input').focus();
    history.pushState({}, '', window.location.pathname);
  });
  
  // Share buttons
  $('#share-x').addEventListener('click', () => {
    const job = $('#result-title').textContent;
    const level = $('#cooked-label').textContent;
    const url = window.location.href;
    const text = `I'm a ${job} and my cooked level is ${level} 🍳\n\nFind out when AI takes YOUR job:`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  });
  
  $('#share-copy').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const btn = $('#share-copy');
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = orig, 2000);
    });
  });
  
  function checkJob() {
    const input = $('#job-input').value.trim();
    if (!input) {
      $('#job-input').classList.add('shake');
      setTimeout(() => $('#job-input').classList.remove('shake'), 500);
      return;
    }
    
    // Update URL
    const slug = input.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    history.pushState({}, '', `?job=${slug}`);
    
    // Show calculating screen
    $('#landing').classList.remove('visible');
    $('#results').classList.remove('visible');
    $('#calculating').classList.add('visible');
    
    // Dramatic delay
    const phrases = [
      'Scanning job market...',
      'Consulting the AI overlords...',
      'Calculating your obsolescence...',
      'Measuring existential threat level...'
    ];
    let i = 0;
    const phraseInterval = setInterval(() => {
      i++;
      if (i < phrases.length) {
        $('#calc-text').textContent = phrases[i];
      }
    }, 500);
    
    setTimeout(() => {
      clearInterval(phraseInterval);
      $('#calculating').classList.remove('visible');
      showResults(input);
    }, 2200);
  }
  
  function showResults(query) {
    const job = findJob(query);
    
    // Title
    $('#result-title').textContent = query.charAt(0).toUpperCase() + query.slice(1);
    
    // Cooked level
    const label = $('#cooked-label');
    label.textContent = job.cookedLevel;
    label.className = 'cooked-label ' + levelClass(job.cookedLevel);
    
    // Description
    $('#result-description').textContent = job.description;
    
    // Confidence ring
    setupConfidenceRing(job.confidence);
    
    // Countdown
    setupCountdown(job.daysUntilCooked);
    
    // Timeline
    setupTimeline(job.milestones);
    
    // Show
    $('#results').classList.add('visible');
  }
  
  function levelClass(level) {
    const map = {
      'RAW': 'level-raw',
      'WARMING UP': 'level-warming',
      'MEDIUM': 'level-medium',
      'WELL DONE': 'level-welldone',
      'BURNT TO A CRISP': 'level-burnt'
    };
    return map[level] || 'level-medium';
  }
  
  function setupConfidenceRing(confidence) {
    const ring = $('#confidence-ring');
    const text = $('#confidence-text');
    const circumference = 2 * Math.PI * 54;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference;
    
    // Color based on confidence
    let color;
    if (confidence < 35) color = '#22c55e';
    else if (confidence < 65) color = '#eab308';
    else if (confidence < 85) color = '#f97316';
    else color = '#ef4444';
    ring.style.stroke = color;
    
    // Animate
    requestAnimationFrame(() => {
      setTimeout(() => {
        const offset = circumference - (confidence / 100) * circumference;
        ring.style.strokeDashoffset = offset;
        text.textContent = confidence + '%';
      }, 100);
    });
  }
  
  function setupCountdown(daysFromNow) {
    clearInterval(countdownInterval);
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysFromNow);
    
    function update() {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        $('#cd-days').textContent = '00';
        $('#cd-hours').textContent = '00';
        $('#cd-minutes').textContent = '00';
        $('#cd-seconds').textContent = '00';
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      $('#cd-days').textContent = String(d).padStart(2, '0');
      $('#cd-hours').textContent = String(h).padStart(2, '0');
      $('#cd-minutes').textContent = String(m).padStart(2, '0');
      $('#cd-seconds').textContent = String(s).padStart(2, '0');
    }
    
    update();
    countdownInterval = setInterval(update, 1000);
  }
  
  function setupTimeline(milestones) {
    const container = $('#timeline');
    container.innerHTML = '';
    milestones.forEach((m, i) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.style.animationDelay = `${0.3 + i * 0.15}s`;
      item.innerHTML = `
        <div class="timeline-year">${m.year}</div>
        <div class="timeline-event">${m.event}</div>
      `;
      container.appendChild(item);
    });
  }
})();
