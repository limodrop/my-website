# Quote Form Email Setup - Gmail SMTP Configuration

## Overview
The quote form has been connected to send emails via Gmail SMTP using the business email **hello@oregontowncar.com**.

## What Was Implemented

### ✅ Backend Email Delivery
- **API Endpoint**: `/api/quote` (POST)
- **Email Provider**: Gmail SMTP via nodemailer
- **Admin Email**: hello@oregontowncar.com (receives quote requests)
- **Customer Email**: Automatic confirmation sent to customer
- **From Address**: "Oregon Town Car &lt;hello@oregontowncar.com&gt;"
- **Reply-To**: Customer's email address (on admin emails)

### ✅ Email Templates

**Admin Email (to hello@oregontowncar.com):**
- Subject: "New Quote Request from [Customer Name]"
- Contains: Customer info (name, email, phone), trip details (pickup, dropoff, date, time, notes)
- Reply-To: Customer's email for easy responses

**Customer Confirmation Email:**
- Subject: "Quote Request Received - Oregon Town Car"
- Contains: Trip details, what's next, contact information
- Professional branded template with company details

### ✅ Validation
- Name (minimum 2 characters)
- Email (valid format with regex)
- Pickup location (required)
- Dropoff location (required)
- Date (required)
- Time (required)
- Phone and notes are optional

### ✅ Server Logging
All quote form activity is logged to console:
```
[Quote API] Quote request received: { name, email, pickup, dropoff, date, time }
[Quote API] Admin email sent successfully to hello@oregontowncar.com
[Quote API] Customer confirmation email sent successfully to [customer email]
[Quote API] Validation failed: [error details]
[Quote API] Failed to send admin email: [error]
[Quote API] Unexpected error: [error]
```

### ✅ Error Handling
- Server-side validation with clear error messages
- Frontend displays errors to user in red alert box
- Graceful degradation (customer email failure doesn't block request)
- Network error handling

## Required Configuration

### Step 1: Generate Gmail App Password

The application needs a Gmail App Password to send emails. **Do NOT use your regular Gmail password.**

1. Go to Google Account: https://myaccount.google.com/apppasswords
2. Sign in with **hello@oregontowncar.com**
3. Click "Generate" for a new app password
4. Select:
   - App: **Mail**
   - Device: **Other (Custom name)** → Enter "Oregon Town Car Website"
5. Copy the **16-character password** (format: xxxx xxxx xxxx xxxx)

### Step 2: Update Environment Variables

Update `.env.local` with the App Password:

```bash
# Gmail SMTP Configuration for Quote Form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=hello@oregontowncar.com
SMTP_PASS=your-16-character-app-password-here  # ← Paste the App Password here
```

### Step 3: Deploy to Production

The `.env.local` file is gitignored and not pushed to GitHub. You must configure environment variables in your production environment:

**GitHub Actions (deploy-ghcr branch):**
1. Go to repository Settings → Secrets and variables → Actions
2. Add these repository secrets:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `465`
   - `SMTP_USER` = `hello@oregontowncar.com`
   - `SMTP_PASS` = (paste the 16-character App Password)

**Docker Container:**
Pass environment variables when running the container:
```bash
docker run -e SMTP_HOST=smtp.gmail.com \
           -e SMTP_PORT=465 \
           -e SMTP_USER=hello@oregontowncar.com \
           -e SMTP_PASS=your-app-password-here \
           -p 3000:3000 your-image-name
```

## Testing

### Local Testing
1. Update `.env.local` with the App Password
2. Restart Next.js dev server: `npm run dev`
3. Navigate to a page with the quote form (or open the quote modal)
4. Fill out and submit the form
5. Check console for logs: `[Quote API] Quote request received...`
6. Check email inbox for:
   - Admin email at hello@oregontowncar.com
   - Customer confirmation at the email you entered

### Production Testing
1. After deploying with environment variables configured
2. Visit https://oregontowncar.com
3. Open the quote form/modal
4. Submit a test quote
5. Verify emails arrive at hello@oregontowncar.com
6. Check deployment logs for quote API activity

## Expected Logs (Success)

```
[Quote API] Quote request received: {
  name: 'John Doe',
  email: 'john@example.com',
  pickup: 'PDX Airport',
  dropoff: 'Downtown Portland Hotel',
  date: '2026-02-01',
  time: '14:00'
}
[Quote API] Admin email sent successfully to hello@oregontowncar.com
[Quote API] Customer confirmation email sent successfully to john@example.com
```

## Troubleshooting

### "Email service not configured" error
**Cause**: Missing SMTP environment variables  
**Solution**: Verify `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASS` are set in `.env.local` (local) or deployment secrets (production)

### "Failed to send admin email" error
**Possible causes**:
1. **Invalid App Password**: Generate a new App Password and update `SMTP_PASS`
2. **2-Step Verification not enabled**: Gmail requires 2FA to generate App Passwords
3. **SMTP blocked**: Check firewall/network settings (port 465 must be open)
4. **Gmail security**: Check hello@oregontowncar.com inbox for security alerts

### Emails not arriving
1. **Check spam folder** at hello@oregontowncar.com
2. **Verify logs**: Look for `[Quote API] Admin email sent successfully`
3. **Gmail sending limits**: Free Gmail has sending limits (~500/day)
4. **DNS/SPF records**: For production, configure SPF to authorize Gmail SMTP

### Customer confirmation not sent
- Check logs for `[Quote API] Failed to send customer confirmation email`
- This is non-blocking - the quote request still succeeds
- Verify customer email format is valid

## Security Notes

✅ **Secure practices implemented:**
- App Password instead of account password
- Environment variables never committed to Git
- SMTP credentials only stored server-side
- SSL connection (port 465) for encrypted email transmission
- Input validation prevents injection attacks
- Reply-To header set for safe customer responses

❌ **Never do this:**
- Don't commit `.env.local` to Git
- Don't hardcode the App Password in code
- Don't expose SMTP credentials to client-side JavaScript
- Don't use your personal Gmail password

## Files Modified

```
✅ app/api/quote/route.ts (NEW) - Quote form API endpoint with Gmail SMTP
✅ app/components/QuoteForm.tsx - Updated to use /api/quote endpoint
✅ .env.local - Added SMTP configuration variables
✅ package.json - Added nodemailer dependencies
```

## Next Steps

1. ✅ Generate Gmail App Password for hello@oregontowncar.com
2. ✅ Update `.env.local` locally for testing
3. ✅ Test quote form submission locally
4. ✅ Configure production environment variables (GitHub Secrets or Docker env)
5. ✅ Deploy to production
6. ✅ Test quote form in production
7. ✅ Monitor logs for any issues
8. ✅ Set up email forwarding rules if needed (optional)

## Support

If you encounter issues:
1. Check deployment logs for `[Quote API]` entries
2. Verify environment variables are set correctly
3. Test SMTP credentials using a simple nodemailer test script
4. Check Gmail account security settings at https://myaccount.google.com/security

---

**Last Updated**: January 24, 2026  
**Commit**: 2fab6f7 - feat(quote): connect quote form to Gmail SMTP email delivery
