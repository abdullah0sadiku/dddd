export function footer(div){
    div.innerHTML =`
    <footer class="bg-light text-center text-lg-start">
    <div class=" p-4" style = "  background-color: #021227;   color: #daeaff;  width:100%;">
        <div class="row">
            <div class="col-lg-3 col-md-6 mb-4">
                <h5 class="text-uppercase">TechNova</h5>
                <ul class="list-unstyled mb-0">
                    <li>
                        <a href="#!" class="text-light">Home</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">About Us</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <h5 class="text-uppercase">Legal</h5>
                <ul class="list-unstyled mb-0">
                    <li>
                        <a href="#!" class="text-light">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Terms of Service</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>`
}