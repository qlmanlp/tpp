
class MusicPlayer {
	state: MusicPlayerState;

	changeState(state: MusicPlayerState) {
		this.state = state;
	}
}

interface MusicPlayerState {
	play(): void;
	pause(): void;
	stop(): void;
}

class PlayState implements MusicPlayerState {
	play(): void {
		console.log("Music has already played!")
	}
	pause(): void {
		console.log('Music was paused!');
	}
	stop(): void {
		console.log('Music was stopped!');
	}
}

class PauseState implements MusicPlayerState {
	play(): void {
		console.log('Music play continue');
	}
	pause(): void {
		console.log('Music has already paused!');
	}
	stop(): void {
		console.log('Music starts playing again');
	}
}

class StopState implements MusicPlayerState {
	play(): void {
		console.log('Music starts playing again');
	}
	pause(): void {
		console.log('Nothing happen');
	}
	stop(): void {
		console.log('Music plays backwards');
	}
}

const musicPlayer = new MusicPlayer();
musicPlayer.changeState(new PlayState());

musicPlayer.state.play();


