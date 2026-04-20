let guitarInterval = null;

async function playGitaraMany() {
  if (guitarInterval) {
    clearInterval(guitarInterval);
    guitarInterval = null;
  }

  guitarInterval = setInterval(() => {
    if (!mapVariable.includes('playGitara')) {
      clearInterval(guitarInterval); 
      guitarInterval = null; 
      return; 
    }
    Player.maney += 1; 
    upInterface();
  }, 5000);
}