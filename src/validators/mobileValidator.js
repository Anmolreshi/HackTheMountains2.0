export default function ValidateMobileNumber(number) 
{
 if (/^\d+$/.test(number)&&number.length==10)
  {
    return (true)
  }
    return (false)
}