/**
 * Question:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

    Examples: 
 *  Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].

    Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
 */

    //My answer

    /**
     * 常规的反应：两重for循环
     * @returns 
     */
function outPut_1():number[]{
    let example_1 = [2,7,11,15];
    let example_2 = [3,2,4];
    let example_3 = [3,3];
    let target_1=9;
    let target_2=6;
    let target_3=6;
    
    let answer:number[] = [];
    for(let i=0;i<example_1.length-1;i++){
       for(let j=i+1;j<example_1.length;j++){
          let iOne = example_1[i];
          let jOne = example_1[j];
          if(iOne+jOne==target_1){
             answer.push(i,j);
          }
       }
    }
    return answer;
}

/**
 * 使用indexOf
 * @returns 
 */
function outPut_2():number[]{
   let example_1 = [2,7,11,15];
   let target_1=9;
   let answer:number[] = [];
   let targetNum = -1;
   let index=0;
   for(let i=0;i<example_1.length;i++){
      targetNum = target_1 - example_1[i];
      index = example_1.indexOf(targetNum)
      if(index>-1){
         answer.push(i,index);
      }
   }
   return Array.from(new Set(answer));
}

/**
 * 使用新map特性
 * @returns 
 */
function outPut_3():number[]{
   let example_1 = [2,7,11,15];
   let target_1=9;
   let answer:number[] = [];
   let map = new Map();
   for(let i=0;i<example_1.length;i++){
      if(map.has(target_1-example_1[i])){
         return [map.get(target_1-example_1[i]),i];
      }else{
         map.set(example_1[i],i);
      }
   }
   return [];
}

function outPut_4():number[]{
   let example_1 = [2,7,11,15];
   let target_1=9;
   let answer:number[] = [];
   let hash = {};
   for(let i=0;i<example_1.length;i++){
      if(hash[target_1-example_1[i]]!==undefined){
         return [hash[target_1-example_1[i]],i]
      }
      hash[example_1[i]] = i;
   }
   return [];
}