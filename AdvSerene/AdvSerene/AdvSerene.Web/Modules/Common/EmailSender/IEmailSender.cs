﻿using MimeKit;

namespace AdvSerene.Common
{
    public interface IEmailSender
    {
        void Send(MimeMessage message, bool skipQueue = false);
    }
}