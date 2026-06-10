$(document).ready(function() {
    var table = $('#recentApplicantsTable').DataTable({
        responsive: true,
        dom: 'lfrtip',
        pageLength: 5,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "All"]
        ],
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search records filter...",
            paginate: {
                next: '→',
                previous: '←'
            }
        }
    })
    // Delegasi Pemicu Aksi Ekspor Tombol Kustom Berbasis SVG
    new $.fn.dataTable.Buttons(table, {
        buttons: [{
                extend: 'excelHtml5'
            },
            {
                extend: 'pdfHtml5'
            }
        ]
    })
    // Menghubungkan Trigger Klik Elemen HTML Manual ke Ekspor Instance DataTables
    $('#exportExcelBtn').on('click', function() {
        table.button('.buttons-excel').trigger();
    })
    $('#exportPdfBtn').on('click', function() {
        table.button('.buttons-pdf').trigger();
    })
    table.buttons().container().appendTo('#dtButtonsContainer')
});