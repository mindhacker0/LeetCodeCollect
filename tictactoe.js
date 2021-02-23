/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let map=[[0,0,0],[0,0,0],[0,0,0]];
	let man=["x","o"],step=0;
	for(let i=0;i<moves.length;i++){
		map[moves[i][0]][moves[i][1]]=man[step%2];
		step++;
	}
	function check(pattern,color){//check winner
		//row win check
		for(let i=0;i<pattern.length;i++){
			let win=true;
			for(let j=0;j<pattern[i].length;j++){
				if(pattern[i][j]!==color){
					win=false;
				}
			}
			if(win) return true;
		}
		//col win check
		for(let i=0;i<pattern.length;i++){
			let win=true;
			for(let j=0;j<pattern[i].length;j++){
				if(pattern[j][i]!==color){
					win=false;
				}
			}
			if(win) return true;
		}
		//cross corner win check
		{//corner top left to bottom right 
			let win=true;
			for(let j=0;j<pattern.length;j++){
				 if(pattern[j][j]!==color){
					win=false;
				 }
			}
			if(win) return true;
		}
		{//corner bottom left to top right
			let win=true;
			for(let j=0;j<pattern.length;j++){
				 if(pattern[j][2-j]!==color){
					win=false;
				 }
			}
			if(win) return true;
		}
		return false;
	}
	if(check(map,"x")&&!check(map,"o")){
		return "A";
	}else if(check(map,"o")&&!check(map,"x")){
		return "B";
	}else{
		return moves.length===9?"Draw":"Pending";
	}
};
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]));