
namespace Ser2108.Administration
{
    public enum PasswordValidationResult
    {
        EmptyUsername,
        EmptyPassword,
        InactiveUser,
        UnknownSource,
        Throttle,
        DirectoryError,
        Invalid,
        Valid
    }
}