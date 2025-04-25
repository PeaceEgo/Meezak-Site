// Custom hook for rate limiting
export function useRateLimit(limitCount = 3, timeWindowMinutes = 60) {
    const checkRateLimit = () => {
        // Get stored submission data from localStorage
        const submissionData = JSON.parse(localStorage.getItem("formSubmissions") || "[]")
        const now = new Date().getTime()

        // Filter out submissions older than the time window
        const recentSubmissions = submissionData.filter((timestamp) => {
            return now - timestamp < timeWindowMinutes * 60 * 1000
        })

        // Store the updated list back to localStorage
        localStorage.setItem("formSubmissions", JSON.stringify(recentSubmissions))

        // Check if user has exceeded the limit
        if (recentSubmissions.length >= limitCount) {
            const oldestSubmission = Math.min(...recentSubmissions)
            const timeToWait = Math.ceil((oldestSubmission + timeWindowMinutes * 60 * 1000 - now) / 60000)

            return {
                allowed: false,
                timeToWait,
                message: `You've reached the maximum number of submissions. Please try again in ${timeToWait} minutes.`,
            }
        }

        return { allowed: true }
    }

    const recordSubmission = () => {
        // Get stored submission data
        const submissionData = JSON.parse(localStorage.getItem("formSubmissions") || "[]")

        // Add current timestamp
        submissionData.push(new Date().getTime())

        // Store back to localStorage
        localStorage.setItem("formSubmissions", JSON.stringify(submissionData))
    }

    return { checkRateLimit, recordSubmission }
}
