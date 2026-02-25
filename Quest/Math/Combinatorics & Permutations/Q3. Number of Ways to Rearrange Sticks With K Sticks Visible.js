function rearrangeSticks(n, k) {
    const MOD = 10 ** 9 + 7;
    const dp = Array.from({ length: n + 1 }, () =>
        Array.from({ length: k + 1 }, () => 0)
    );
  
    dp[0][0] = 1;
  
    for (let numSticks = 1; numSticks <= n; numSticks++) {
        for (let numVisible = 1; numVisible <= k; numVisible++) {
            dp[numSticks][numVisible] = (
                dp[numSticks - 1][numVisible - 1] + (numSticks - 1) * dp[numSticks - 1][numVisible]
            ) % MOD;
        }
    }
  
    return dp[n][k];
}

