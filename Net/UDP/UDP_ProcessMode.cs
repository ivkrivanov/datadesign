namespace LumiSoft.Net.UDP {
    /// <summary>
    /// This enum specified UDP server packets process mode.
    /// </summary>
    public enum UDP_ProcessMode {
        /// <summary>
        /// UDP packets processed one by one in their receive order.
        /// </summary>
        Sequential = 1,

        /// <summary>
        /// UDP packets processes parallel.
        /// </summary>
        Parallel = 2,
    }
}
