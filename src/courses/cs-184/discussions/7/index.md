{.let page-title CS 184}

{.let body}

# Discussion 7

## Bullets

- Global illumination & path tracing
    - (By course definition:) ray tracing vs. path tracing
- Russian Roulette
- Unbiased random termination
    $X_{rr} = \frac{X}{p_{rr}}$ with probability $p_{rr}$
- Material modeling
    - BRDF
        - Bidirectional reflectance distribution function ($f_r$)
        - $L_r(p, \omega_r) = \int_{H^2} f_r(p, \omega_i \rightarrow \omega_r) L_i(p, \omega_i) \cos(\theta_i) d\omega_i$
        - Light transport operators
    - Diffuse/Lambertian material
    - Glossy material
    - Ideal reflective/refractive material
    - Fresnel term (due to gazing angle)
    - Microfacet
        $f(i, o) = \frac{F(i, h) G(i, o, h) D(h)}{4 (n \cdot i) (n \cdot o)}$
    - Properties of BSDF
        - Non-negativity
        - Linearity
        - Reciprocity
        - Energy conservation
        - Isotropic vs. anisotropic

---

🖍 Review section for midterm

{./let}

{.include ../../../../template-sp19/v1.md}
