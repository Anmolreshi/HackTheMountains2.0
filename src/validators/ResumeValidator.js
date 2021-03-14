export default function ValidateResume(profile)
{
if (/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/igm .test(profile))
{
return (true)
}
return (false)
}
