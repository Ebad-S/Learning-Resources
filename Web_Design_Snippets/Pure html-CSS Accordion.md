<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML/CSS Accordion</title>
    <style>
        .accordion {
            display: flex;
            flex-direction: column;
            max-width: 300px;
        }

        .accordion-item {
            border: 1px solid #ccc;
            margin-bottom: 5px;
            overflow: hidden;
        }

        .accordion-header {
            background-color: #f1f1f1;
            padding: 10px;
            cursor: pointer;
        }

        .accordion-content {
            padding: 10px;
            display: none;
        }

        .accordion-item.active .accordion-content {
            display: block;
        }
    </style>
</head>
<body>

<div class="accordion">
    <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">Section 1</div>
        <div class="accordion-content">
            <p>Content for Section 1 goes here.</p>
        </div>
    </div>

    <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">Section 2</div>
        <div class="accordion-content">
            <p>Content for Section 2 goes here.</p>
        </div>
    </div>

    <!-- Add more accordion items as needed -->

</div>

<script>
    function toggleAccordion(element) {
        element.parentElement.classList.toggle('active');
    }
</script>

</body>
</html>
