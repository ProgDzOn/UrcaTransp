<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "تم رفع الملف بنجاح.";
    } else {
        echo "حدث خطأ أثناء رفع الملف.";
    }
}
?>

<form action="upload.php" method="post" enctype="multipart/form-data">
    اختر فيديو لرفعه:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="رفع الفيديو" name="submit">
</form>
