// 85% -> 100% + 77%
//https://app.codility.com/demo/results/training3YJRM2-H7Z/

class Wall{
    constructor(H){
        this.A = H;
        this.closedBlocks = 0;
        this.openBlocks = []
        this.i = 0;
        this.isDone = false;
    }

    step(){
        // limpa gt
        // checka if last eq
        //      if last eq -> caga
        //      if last > -> push
        const h = this.A[this.i];
        if(!h){
            return this.finnish()
        }
        const initialLen = this.openBlocks.length;
        this.openBlocks = this.openBlocks.filter(el => el <= h)
        const endLen = this.openBlocks.length;
        if(this.openBlocks[this.openBlocks.length-1]!= h ){
            this.openBlocks.push(h)
        }
        this.closedBlocks += initialLen-endLen;
        this.i++
      

    }
    finnish(){
        this.isDone = true
        return this.closedBlocks + this.openBlocks.length
    }
}
function solution(H) {
  const wall = new Wall(H);
  while(!wall.isDone){
      wall.step()
  }
  return wall.finnish()
}

// 100%
// https://app.codility.com/demo/results/trainingKF8D3N-382/
function solution(H) {
    const stack = [];
    let blocks = 0;
  
    for (let i = 0; i < H.length; i++) {
      const height = H[i];
  
      while (stack.length > 0 && stack[stack.length - 1] > height) {
        stack.pop();
      }
  
      if (stack.length === 0 || stack[stack.length - 1] < height) {
        blocks++;
        stack.push(height);
      }
    }
  
    return blocks;
  }