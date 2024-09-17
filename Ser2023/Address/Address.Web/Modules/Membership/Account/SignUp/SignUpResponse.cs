
namespace Address.Membership
{
    using Serenity.Services;

    public class SignUpResponse : ServiceResponse
    {
        public string DemoActivationLink { get; set; }
    }
}