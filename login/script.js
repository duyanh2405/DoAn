
        var STT = 0;
        var editing = false;
        var CurrentRow = "";

        function GoiCapNhat()
        {
            if (editing==true)
                SuaDuLieu();
            else
                ThemMoi();
            
        }

        // function CheckID(id)
        // {
        //     var list = this.data;
        //     for (var i = 0; i < list.length; i++){
        //         if (list[i].id == id) {
        //             return true;
        //         }
        //     }
        // }

        function ThemMoi()
        {
            STT++;
            s = "<Tr id=\"row" + STT +"\" onclick=\"ReadData(" + STT +")\">";
            s += "<td>" + STT + "</td>";
            s += "<td id=\"id"+STT +"\">" + frmMain.txtID.value + "</td>";
            s += "<td id=\"hvt"+STT +"\">" + frmMain.txtHoVaTen.value + "</td>";
            s += "<td id=\"ns"+STT +"\">" + frmMain.txtNgaySinh.value + "</td>";
            s += "<td id=\"dc"+STT +"\">" + frmMain.txtDiachi.value + "</td>";
            s += "<td id=\"em"+STT +"\">" + frmMain.txtEmail.value + "</td>";
            s += "<td id=\"gt"+STT +"\">" + frmMain.txtGioiTinh.value + "</td>";
            s += "<td id=\"lp"+STT +"\">" + frmMain.txtLoaiPhong.value + "</td>";
            s += "<td id=\"tt"+STT +"\">" + frmMain.txtTheThao.value + "</td>";
            s += "<td id=\"clb"+STT +"\">" + frmMain.txtCLB.value + "</td>";
            s += "</Tr>";
            s += "<tr id=\"NewItem\" style=\"display:none;\"></tr>";
            
            var newRow = document.getElementById("NewItem");
            newRow.outerHTML = s;
            frmMain.reset();
        }

        function SuaDuLieu()
        {
            var STT = CurrentRow;
            s = "<Tr id=\"row" + STT +"\" onclick=\"ReadData(" + STT +")\">";
            s += "<td>" + STT + "</td>";
            s += "<td id=\"id"+STT +"\">" + frmMain.txtID.value + "</td>";
            s += "<td id=\"hvt"+STT +"\">" + frmMain.txtHoVaTen.value + "</td>";
            s += "<td id=\"ns"+STT +"\">" + frmMain.txtNgaySinh.value + "</td>";
            s += "<td id=\"dc"+STT +"\">" + frmMain.txtDiachi.value + "</td>";
            s += "<td id=\"em"+STT +"\">" + frmMain.txtEmail.value + "</td>";
            s += "<td id=\"gt"+STT +"\">" + frmMain.txtGioiTinh.value + "</td>";
            s += "<td id=\"lp"+STT +"\">" + frmMain.txtLoaiPhong.value + "</td>";
            s += "<td id=\"tt"+STT +"\">" + frmMain.txtTheThao.value + "</td>";
            s += "<td id=\"clb"+STT +"\">" + frmMain.txtCLB.value + "</td>";
            s += "</Tr>";
            //s += "<tr id=\"NewItem\" style=\"display:none;\"></tr>";
            
            var newRow = document.getElementById("row"+STT);
            newRow.outerHTML = s;
            frmMain.reset();
        }

        function ReadData(row)
        {
            CurrentRow = row;
            var id = document.getElementById("id"+row);
            frmMain.txtID.value=id.innerHTML;

            var hvt = document.getElementById("hvt"+row);
            frmMain.txtHoVaTen.value=hvt.innerHTML;

            var ns = document.getElementById("ns"+row);
            frmMain.txtNgaySinh.value=ns.innerHTML;

            var dc = document.getElementById("dc"+row);
            frmMain.txtDiachi.value=dc.innerHTML;

            var em = document.getElementById("em"+row);
            frmMain.txtEmail.value=em.innerHTML;

            var mk = document.getElementById("gt"+row);
            frmMain.txtGioiTinh.value=mk.innerHTML;

            var gt = document.getElementById("lp"+row);
            frmMain.txtLoaiPhong.value=gt.innerHTML;

            var tt = document.getElementById("fr"+row);
            frmMain.txtTheThao.value=tt.innerHTML;

            var clb = document.getElementById("to"+row);
            frmMain.txtCLB.value=clb.innerHTML;
            editing=true;
            frmMain.cmdXoa.disabled=false;
        }

        function GoiThem()
        {
            frmMain.reset();
            editing=false;
            frmMain.cmdXoa.disabled=true;
            frmMain.txtHoVaTen.focus();
        }

        function GoiXoa()
        {
            if (editing=false) return;
            var newRow = document.getElementById("row"+CurrentRow);
            newRow.outerHTML = "";
            frmMain.reset();
            frmMain.cmdXoa.disabled=true;
            editing=false;
        }
