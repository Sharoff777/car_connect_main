<?php
// ============================================================
//  mail.php — Car inquiry form handler with image attachments
//  Upload this alongside your index.html on register.lk
// ============================================================

// --- CONFIGURE THIS ---
$to_email   = "info@carconnect.lk";   // ← your receiving email
$from_email = "info@carconnect.lk";   // ← your sending email (same domain recommended)
$subject    = "New Car Inquiry";
$redirect_success = "index.html";      // ← where to go after success
// ----------------------

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit;
}

// Collect form fields (add/remove fields to match your form's name attributes)
$username  = htmlspecialchars(trim($_POST['username']  ?? ''));
$phone     = htmlspecialchars(trim($_POST['phone']     ?? ''));
$car_make  = htmlspecialchars(trim($_POST['car_make']  ?? ''));
$car_model = htmlspecialchars(trim($_POST['category']  ?? ''));
$mileage   = htmlspecialchars(trim($_POST['mileage']   ?? ''));
$yom       = htmlspecialchars(trim($_POST['yom']       ?? ''));

// Build the HTML email body
$body = "
<html><body style='font-family:Arial,sans-serif;font-size:14px;'>
<h2 style='color:#c8a951;'>New Car Inquiry — Car Connect</h2>
<table cellpadding='8' cellspacing='0' border='1' style='border-collapse:collapse;'>
  <tr><td><strong>Name</strong></td><td>{$username}</td></tr>
  <tr><td><strong>Phone</strong></td><td>{$phone}</td></tr>
  <tr><td><strong>Car Make</strong></td><td>{$car_make}</td></tr>
  <tr><td><strong>Car Model</strong></td><td>{$car_model}</td></tr>
  <tr><td><strong>Mileage</strong></td><td>{$mileage}</td></tr>
  <tr><td><strong>Year of Manufacture</strong></td><td>{$yom}</td></tr>
</table>
<p style='color:#888;font-size:12px;margin-top:20px;'>Sent via carconnect.lk inquiry form</p>
</body></html>
";

// MIME boundary
$separator = md5(uniqid(rand(), true));
$eol = "\r\n";

// Headers
$headers  = "From: {$from_email}" . $eol;
$headers .= "Reply-To: {$from_email}" . $eol;
$headers .= "MIME-Version: 1.0" . $eol;
$headers .= "Content-Type: multipart/mixed; boundary=\"{$separator}\"" . $eol;

// Start message with HTML body part
$message  = "--{$separator}" . $eol;
$message .= "Content-Type: text/html; charset=\"UTF-8\"" . $eol;
$message .= "Content-Transfer-Encoding: 7bit" . $eol . $eol;
$message .= $body . $eol;

// Attach uploaded images
// The names here (filename1, filename2, filename3) must match the
// name="" attribute on your <input type="file"> fields in index.html
$allowed_types = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
$max_size_bytes = 5 * 1024 * 1024; // 5 MB per image

for ($i = 1; $i <= 10; $i++) {
    $field = 'filename' . $i;
    if (
        isset($_FILES[$field]) &&
        $_FILES[$field]['error'] === UPLOAD_ERR_OK &&
        $_FILES[$field]['size'] <= $max_size_bytes
    ) {
        $tmp  = $_FILES[$field]['tmp_name'];
        $name = basename($_FILES[$field]['name']);
        $mime = mime_content_type($tmp);

        // Only allow image files
        if (!in_array($mime, $allowed_types)) {
            continue;
        }

        $data = chunk_split(base64_encode(file_get_contents($tmp)));

        $message .= "--{$separator}" . $eol;
        $message .= "Content-Type: {$mime}; name=\"{$name}\"" . $eol;
        $message .= "Content-Transfer-Encoding: base64" . $eol;
        $message .= "Content-Disposition: attachment; filename=\"{$name}\"" . $eol . $eol;
        $message .= $data . $eol;
    }
}

$message .= "--{$separator}--";

// Send
if (mail($to_email, $subject, $message, $headers)) {
    echo "<script>alert('Your inquiry has been sent successfully!'); window.location.href = '{$redirect_success}';</script>";
} else {
    echo "<script>alert('Sorry, the email could not be sent. Please try calling us directly.'); window.history.back();</script>";
}
?>