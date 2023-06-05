class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        same = {} # empty dictionary
        for i in range(len(nums)): # for each # in list(nums)
            if target-nums[i] in same: # if the target minus the # is in the dictionary...
                return [same[target-nums[i]],i] 
            same[nums[i]] = i
        return[]
