function palindrome(str) {
  let ans = str.split("").filter(x => /[a-z0-9]/i.test(x))
  console.log(ans)
  if (ans.join("").toLowerCase() == ans.reverse().join("").toLowerCase()) {
    return true;
  }
  return false;
}

palindrome("My age is 0, 0 si ega ym");
console.log(palindrome("My age is 0, 0 si ega ym."))
